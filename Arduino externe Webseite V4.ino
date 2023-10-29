#include <WiFi.h>
#include <HTTPClient.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME680.h>

const char* ssid = "ssid";
const char* password = "password";
const String serverAddress = "http://192.168.0.227:3000";  // Die Basis-URL, die Sie aufrufen möchten

const int sda = 21;   // Pin für die Messdaten (I2C)
const int scl = 22;   // Pin für die Taktrate (I2C)
Adafruit_BME680 bme;  // Erstellt ein Objekt für den BME680-Sensor

void setup() {
  Serial.begin(115200);        // Initialisieren der seriellen Kommunikation mit einer Baudrate von 115200
  WiFi.begin(ssid, password);  // Verbindung zum WLAN herstellen

  // I2C-Kommunikation mit den Pins sda und scl einstellen
  Wire.begin(sda, scl);

  // BME680-Sensor initialisieren, prüfen, ob er gefunden wird
  if (!bme.begin()) {
    Serial.printf("Kann keinen BME680-Sensor finden. Programm wird beendet.\n");
    while (1)
      ;  // In Endlosschleife bleiben
  }
  Serial.printf("BME680-Sensor gefunden\n");

  // Warten, bis die Verbindung zum WLAN hergestellt ist
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Verbindung zum WLAN wird hergestellt...");
  }
}

void loop() {
  /*
  float humidity = 50.0; // Beispielwert für die Luftfeuchtigkeit
  float temperature = 25.0; // Beispielwert für die Temperatur
*/

  float humidity = bme.setTemperatureOversampling(BME680_OS_8X);
  float temperature = bme.setHumidityOversampling(BME680_OS_2X);

  Serial.println(humidity);
  Serial.println(temperature);

  // Die Ziel-URL für die HTTP-GET-Anfrage erstellen, wobei die Werte der Luftfeuchtigkeit und Temperatur in der URL festgelegt sind
  String targetUrl = "http://192.168.0.227:3000/sensor-data?humidity=";
  targetUrl += humidity;
  targetUrl += "&temperature=";
  targetUrl += temperature;
  Serial.println(targetUrl);

  // Führen Sie die HTTP-GET-Anfrage aus
  sendHttpGetRequest(targetUrl);

  delay(5000);  // Warten Sie 5 Sekunden, bevor Sie die nächsten Werte senden
}

void sendHttpGetRequest(String url) {
  HTTPClient http;
  http.begin(url);  // Die HTTP-GET-Anfrage vorbereiten und die Ziel-URL festlegen

  int httpResponseCode = http.GET();  // Die HTTP-GET-Anfrage ausführen und den HTTP-Antwortcode speichern

  if (httpResponseCode > 0) {
    String payload = http.getString();      // Die Antwort von der HTTP-Anfrage abrufen
    Serial.println("Antwort: " + payload);  // Die Antwort auf der seriellen Konsole ausgeben
  } else {
    Serial.print("HTTP-Anfrage fehlgeschlagen, Fehlercode: ");
    Serial.println(httpResponseCode);  // Fehlermeldung anzeigen, wenn die HTTP-Anfrage fehlschlägt
  }

  http.end();  // Die HTTP-Verbindung beenden
}
