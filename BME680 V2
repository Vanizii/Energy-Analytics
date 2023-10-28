#include <WiFi.h>
#include <WebServer.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME680.h>

#define MYSSID "Honor"
#define MYPASS "CaroNet4"

WebServer server(80);

const int sda = 21;     // Messdaten
const int scl = 22;     // clock
Adafruit_BME680 bme;

// setup
void setup() 
{
  // monitor auf 115200 baud einstellen
  Serial.begin(115200);
  delay(1000);
  Serial.println("\n\nbme680 web server\n");
  
  // i2c einstellen
  Wire.begin(sda, scl);
  // bme680 initialisieren
  if(!bme.begin()) {
    Serial.printf("kann keinen bme680 sensor finden. ende.\n");
    while(1);
  }  
  Serial.printf("bme680 sensor gefunden\n");
  // bme680 oversampling einstellen
  bme.setTemperatureOversampling(BME680_OS_8X);
  bme.setHumidityOversampling(BME680_OS_2X);

  // station mode einstellen
  WiFi.mode(WIFI_STA);
  // zum netzwerk verbinden
  WiFi.begin(MYSSID, MYPASS);
  // auf verbindung warten
  Serial.print("verbinden zum netzwerk ");
  while(WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500); 
  }
  Serial.println(" erledigt");
  Serial.print("verbunden mit ");
  Serial.println(MYSSID);
  Serial.print("ip adresse: ");
  Serial.println(WiFi.localIP());

  // server handler fuer uris installieren
  server.on("/", handleRoot);
  server.onNotFound(handleNotFound);
 
  // server starten
  server.begin();
  
  Serial.println("setup erledigt\n");
}

// root - handler
void handleRoot() 
{
  char response[256];
  float humidity;
  float temperature;
  
  humidity = bme.readHumidity();
  temperature = bme.readTemperature();
  sprintf(response, "luftfeuchte: %.2f %% temperatur: %.2f *c\n", humidity, temperature);
  Serial.printf("sende: %s\n", response);
  server.send(200, "text/plain", response);
}

// not found - handler
void handleNotFound()
{
  String message = "file nicht gefunden\n\n";
  message += "uri: ";
  message += server.uri();
  message += "\nmethode: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\narguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i=0; i < server.args(); i++){
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
}


// main loop
void loop() 
{
  server.handleClient();
}
