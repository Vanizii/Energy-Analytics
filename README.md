# Sensoren - Caro und Vani

Wir benutzen den ESP32 als Microcontroller und einen BME680 Sensor zur Messung von Temperatur und Luftfeuchtigkeit am Beispiel an einem einzelnen Raum. Der Sensor sendet die Messdaten zunächst an den ESP32, welcher als sich als Client mit der Webseite verbindet. Der Microcontroller sendet die Daten des Sensors über WiFi (Protokoll TCP) and den Webserver. Dort werden die Messdaten dann angezeigt. 

Hardware
ESP32 mit WiFi-Fähigkeiten
Sensoren zur Erfassung von Temperatur und Luftfeuchtigkeit

Arduino-Code
Der Arduino-Code ist verantwortlich für die Erfassung der Sensordaten, das Erstellen einer URL mit diesen Daten und das Senden einer HTTP-GET-Anfrage an den Node.js-Server.

Ablauf
Verbindung zum WLAN herstellen: Das Arduino-Programm stellt eine Verbindung zum WLAN-Netzwerk her, indem es SSID und Passwort verwendet.
Sensordaten erfassen: Die aktuellen Werte für Temperatur und Luftfeuchtigkeit werden ausgelesen. 
Die Kommunikation zwischen dem Arduino und dem Node.js-Server erfolgt über HTTP-GET-Anfragen. Der Arduino sendet Sensordaten in der URL, und der Node.js-Server extrahiert diese Daten, verarbeitet sie und sendet eine JSON-Antwort zurück. Dies ermöglicht eine einfache Datenübertragung zwischen den beiden Programmen über das Netzwerk.



