#include <WiFi.h>
#include <HTTPClient.h>
#include <HTTPClient.h>

const char* ssid = "ssid";
const char* password = "passwort";
const String serverAddress = "http://192.168.0.227:3000";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Verbindung zum WLAN wird hergestellt...");
  }
}

void loop() {
  float humidity = 50.0; // Beispielwert für Luftfeuchtigkeit
  float temperature = 25.0; // Beispielwert für Temperatur

  String targetUrl = "http://192.168.0.227:3000/sensor-data?humidity=25&temperature=24";

    // Führen Sie die HTTP-Anfrage aus
    sendHttpGetRequest(targetUrl);

  delay(5000); // Warten Sie 5 Sekunden, bevor Sie die nächsten Werte senden
}

void sendHttpGetRequest(String url) {
    HTTPClient http;
    http.begin(url);

    int httpResponseCode = http.GET();

    if (httpResponseCode > 0) {
        String payload = http.getString();
        Serial.println("Antwort: " + payload);
    } else {
        Serial.print("HTTP-Anfrage fehlgeschlagen, Fehlercode: ");
        Serial.println(httpResponseCode);
    }

    http.end();
}
