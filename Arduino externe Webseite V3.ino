#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "ssid"; 
const char* password = "passwort"; 
const String serverAddress = "http://192.168.0.227:3000"; // Die Basis-URL, die Sie aufrufen möchten

void setup() {
  Serial.begin(115200); // Initialisieren der seriellen Kommunikation mit einer Baudrate von 115200
  WiFi.begin(ssid, password); // Verbindung zum WLAN herstellen

  // Warten, bis die Verbindung zum WLAN hergestellt ist
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Verbindung zum WLAN wird hergestellt...");
  }
}

void loop() {
  float humidity = 50.0; // Beispielwert für die Luftfeuchtigkeit
  float temperature = 25.0; // Beispielwert für die Temperatur

  // Die Ziel-URL für die HTTP-GET-Anfrage erstellen, wobei die Werte der Luftfeuchtigkeit und Temperatur in der URL festgelegt sind
  String targetUrl = "http://192.168.0.227:3000/sensor-data?humidity=25&temperature=24";

  // Führen Sie die HTTP-GET-Anfrage aus
  sendHttpGetRequest(targetUrl);

  delay(5000); // Warten Sie 5 Sekunden, bevor Sie die nächsten Werte senden
}

void sendHttpGetRequest(String url) {
    HTTPClient http;
    http.begin(url); // Die HTTP-GET-Anfrage vorbereiten und die Ziel-URL festlegen

    int httpResponseCode = http.GET(); // Die HTTP-GET-Anfrage ausführen und den HTTP-Antwortcode speichern

    if (httpResponseCode > 0) {
        String payload = http.getString(); // Die Antwort von der HTTP-Anfrage abrufen
        Serial.println("Antwort: " + payload); // Die Antwort auf der seriellen Konsole ausgeben
    } else {
        Serial.print("HTTP-Anfrage fehlgeschlagen, Fehlercode: ");
        Serial.println(httpResponseCode); // Fehlermeldung anzeigen, wenn die HTTP-Anfrage fehlschlägt
    }

    http.end(); // Die HTTP-Verbindung beenden
}
