# <u>Mars News App</u>

Sehe dir die Seite auf [Heroku](https://mars-news-app.herokuapp.com) an. :)

## <u>Inhaltsverzeichnis</u>

1. [Service](#service)
2. [Installationsschritte](#installationsschritte)
3. [Google's Material Design Color System](#googles-material-design-color-system)



## <u>Service</u>

Die Mars News App informiert einen über das vergangene und aktuelle Wetter auf dem Mars und liefert interessante Mars Rover Bilder. Da nicht jeden Tag eine bahnbrechende Entdeckung gemacht wird und man sonst nur die Bilder in den Medien mitbekommt, soll diese App Ihnen die Möglichkeit geben die neusten Bilder/Wetter direkt ohne großen Auffand sehen zu können, damit Sie selbst immer auf dem neusten Stand bleiben. Dabei werden zwei NASA APIs verwendet, zum einen die Mars Rover Photos API [`https://api.nasa.gov/mars-photos/api`](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY) und zum anderen die InSight / Wetter API [`https://api.nasa.gov/insight_weather`](https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0). Beide APIs werden von der NASA kostenfrei zur Verfügung gestellt, man benötigt einzig und allein einen API Zugangs Schlüssel. Bei der Wetter API werden nur für die letzten sieben Tage Informationen bereitgestellt, die Erfahrung zeigte aber, dass dies nicht ganz stimmt. Denn es werden nur maximal für sieben Tage Daten bereitgestellt, der genaue Zeitraum ist dabei unbekannt, liegt aber meistens nur maximal einen Monat zurück. Bei der Mars Rover API gibt es sehr viele Daten für fast jeden Tag, seit dem der Mars Rover auf dem Mars war, jedoch gibt es nicht immer von allen Kameras Bilder.



## <u>Installationsschritte</u>

1. Öffne die Konsole und gehe in dein Zielverzeichnis 

2. Dann in der Konsole folgendes eingeben:

   ```
   $ git clone https://git.thm.de/mgod03/mars-news-app.git
   $ cd mars-news-app
   $ npm install
   $ set DEBUG=myapp:* & npm start
   ```

3. Nun kannst du die Website unter [http://localhost:3000/](http://localhost:3000/) abrufen.



## <u>Google's Material Design Color System</u>

Da das Weltall dunkel ist und man schwarz damit besser verbindet habe ich mich auf die Farben, Schwarz, Weiß und Braun entschieden. Braun spiegelt dabei die Farbe des Mars wieder. Weiß habe wurde für die Schrift auf schwarzen Hintergrund verwendet, aber auch als zwischen Blöcke für die verschiedenen Abschnitte. Bei dem folgenden Bild wurden die Farben mit Hilfe vom "Google's Material Design Color System" bestimmt. Im Bild werden aber nicht alle passenden Farben aufgelistet, wie z.B. Schwarz, weil nicht die ganze Farbpallette angezeigt wurde.

![Google's Material Design Color System](Googles Material Design Color System.PNG)

