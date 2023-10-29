#include <WiFi.h>
#include <WebServer.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME680.h>

#define MYSSID "Honor"       // WLAN-Netzwerkname (SSID)
#define MYPASS "CaroNet4"    // WLAN-Passwort (Passphrase)

WebServer server(80);         // Erstellt einen Webserver, der auf Port 80 lauscht (HTTP-Standardport)

const int sda = 21;           // Pin für die Messdaten (I2C)
const int scl = 22;           // Pin für die Taktrate (I2C)
Adafruit_BME680 bme;         // Erstellt ein Objekt für den BME680-Sensor

// setup-Funktion: Wird einmal beim Start des Mikrocontrollers ausgeführt
void setup() 
{
  // Serielle Kommunikation mit 115200 Baud starten, um Debug-Informationen anzuzeigen
  Serial.begin(115200);
  delay(1000);  // Eine Sekunde Verzögerung

  // Debug-Meldung anzeigen
  Serial.println("\n\nbme680 web server\n");

  // I2C-Kommunikation mit den Pins sda und scl einstellen
  Wire.begin(sda, scl);

  // BME680-Sensor initialisieren, prüfen, ob er gefunden wird
  if (!bme.begin()) {
    Serial.printf("Kann keinen BME680-Sensor finden. Programm wird beendet.\n");
    while (1); // In Endlosschleife bleiben
  }  
  Serial.printf("BME680-Sensor gefunden\n");

  // Einstellungen für Oversampling (Abtastung) für Temperatur und Luftfeuchtigkeit setzen
  bme.setTemperatureOversampling(BME680_OS_8X);
  bme.setHumidityOversampling(BME680_OS_2X);

  // WLAN-Modus auf Station (Client) einstellen
  WiFi.mode(WIFI_STA);

  // Mit dem WLAN-Netzwerk verbinden, Verbindungsdetails aus MYSSID und MYPASS
  WiFi.begin(MYSSID, MYPASS);

  // Auf die Verbindung zum WLAN warten
  Serial.print("Verbinde mit dem WLAN-Netzwerk ");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500); 
  }
  Serial.println(" abgeschlossen");

  // Erfolgreiche Verbindungsinformationen anzeigen
  Serial.print("Verbunden mit ");
  Serial.println(MYSSID);
  Serial.print("IP-Adresse: ");
  Serial.println(WiFi.localIP());

  // Handler für verschiedene URIs auf dem Webserver installieren
  server.on("/", handleRoot);
  server.onNotFound(handleNotFound);
 
  // Webserver starten
  server.begin();
  
  Serial.println("Setup abgeschlossen\n");
}

// Handler für den Root-URI ("/"): Wird aufgerufen, wenn die Root-Seite aufgerufen wird
void handleRoot() 
{
  char response[256];
  float humidity;
  float temperature;
  
  // Luftfeuchtigkeit und Temperatur vom BME680-Sensor auslesen
  humidity = bme.readHumidity();
  temperature = bme.readTemperature();
  
  // Die ausgelesenen Werte in eine Antwortnachricht formatieren
  sprintf(response, "Luftfeuchte: %.2f %% Temperatur: %.2f *C\n", humidity, temperature);
  
  // Antwort an den Client senden
  Serial.printf("Sende: %s\n", response);
  server.send(200, "text/plain", response);
}

// Handler für "Nicht gefunden" (404-Fehler): Wird aufgerufen, wenn eine unbekannte Ressource angefordert wird
void handleNotFound()
{
  String message = "Datei nicht gefunden\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethode: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArgumente: ";
  message += server.args();
  message += "\n";
  
  // Informationen über die unbekannte Ressource an den Client senden
  for (uint8_t i = 0; i < server.args(); i++){
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  
  // Dem Client einen 404-Fehler (Nicht gefunden) mit der Nachricht senden
  server.send(404, "text/plain", message);
}

// Hauptschleife (loop): Wird kontinuierlich ausgeführt, um eingehende Anfragen zu verarbeiten
void loop() 
{
  server.handleClient();
}