# Sensoren - Caro und Vani

Wir benutzen den ESP32 als Microcontroller und einen BME680 Sensor zur Messung von Temperatur und Luftfeuchtigkeit am Beispiel an einem einzelnen Raum. Der Sensor sendet die Messdaten zunächst an den ESP32, welcher als sich als Client mit der Webseite verbindet. Der Microcontroller sendet die Daten des Sensors über WiFi (Protokoll TCP) and den Webserver. Dort werden die Messdaten dann angezeigt. 

Hardware
ESP32 mit WiFi-Fähigkeiten
Sensoren zur Erfassung von Temperatur und Luftfeuchtigkeit

Arduino-Code
Der Arduino-Code ist verantwortlich für die Erfassung der Sensordaten, das Erstellen einer URL mit diesen Daten und das Senden einer HTTP-GET-Anfrage an den Node.js-Server.

Ablauf
Verbindung zum WLAN herstellen: Das Arduino-Programm stellt eine Verbindung zum WLAN-Netzwerk her, indem es SSID und Passwort verwendet.
Sensordaten erfassen: Die aktuellen Werte für Temperatur und Luftfeuchtigkeit werden ausgelesen. In diesem Beispiel sind es feste Werte, aber in der Praxis würden hier Sensoren eingesetzt.
URL erstellen: Eine URL wird mit den erfassten Sensordaten erstellt, z.B., "http://192.168.0.227:3000/sensor-data?humidity=25&temperature=24".
HTTP-GET-Anfrage senden: Das Arduino-Programm sendet eine HTTP-GET-Anfrage an diese URL, um die Daten an den Node.js-Server zu übermitteln.
Antwort verarbeiten: Die Antwort des Servers wird empfangen und auf der seriellen Konsole ausgegeben.
Node.js-Server
Software
Node.js mit Express-Framework
Node.js-Code
Der Node.js-Server ist verantwortlich für das Empfangen der HTTP-GET-Anfrage vom Arduino, das Extrahieren der Sensordaten aus der Anfrage, das Verarbeiten dieser Daten und das Senden einer JSON-Antwort zurück an den Arduino.

Ablauf
Server initialisieren: Der Node.js-Server wird auf einem bestimmten Port (in diesem Fall Port 3000) gestartet.
Middleware zum Parsen von JSON-Daten aktivieren: Der Server verwendet die body-parser-Middleware, um JSON-Daten in Anfragen zu verarbeiten.
Endpunkt für die Verarbeitung der Anfrage einrichten: Der Server hat einen Endpunkt (Route) namens "/sensor-data" festgelegt, auf den der Arduino seine HTTP-GET-Anfrage sendet.
Anfrage verarbeiten: Wenn eine Anfrage auf diesem Endpunkt eingeht, werden die Parameter "humidity" und "temperature" aus der URL-Anfrage ausgelesen.
Daten verarbeiten: In diesem Beispiel werden die Daten einfach auf der Konsole ausgegeben, aber in der Praxis könnten hier beliebige Verarbeitungsschritte durchgeführt werden.
JSON-Antwort senden: Der Server sendet eine JSON-Antwort zurück an den Arduino, die die gelesenen Sensordaten enthält.
Server läuft auf Port 3000.
Kommunikation
Die Kommunikation zwischen dem Arduino und dem Node.js-Server erfolgt über HTTP-GET-Anfragen. Der Arduino sendet Sensordaten in der URL, und der Node.js-Server extrahiert diese Daten, verarbeitet sie und sendet eine JSON-Antwort zurück. Dies ermöglicht eine einfache Datenübertragung zwischen den beiden Programmen über das Netzwerk.



