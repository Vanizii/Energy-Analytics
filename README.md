# Sensoren - Caro und Vani

Wir benutzen einen BME680 zur Messung von Temperatur und Luftfeuchtigkeit am Beispiel an einem einzelnen Raum. Der Sensor sendet die Messdaten an einen ESP32, welcher als Client für die Webseite fungiert. Der Microcontroller wiederum sendet die Daten des Sensors über WiFi (Protokoll TCP) and den Webserver. Dort werden die Messdaten dann angezeigt. 



