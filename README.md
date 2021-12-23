# AngularKTV 

Als je eenmaal toegang hebt tot het project is het zaak om te kijken of je een git repository hebt, 
zo niet maak deze dan aan. Als je dat eenmaal hebt gedaan is het tijd om de code te clonen en die in bijvoorbeeld Visual Studio Code te plakken.
 Als je nog nooit iets hebt gedaan met Visual Studio Code en GitHub dan zal je even moeten inloggen met hetzelfde account als waarmee je toegang hebt op GitHub.
 Daarna krijg je waarschijnlijk het bestand op je eigen computer, omdat wij werken met Angular moet je node modules downloaden. 
Ga naar https://nodejs.org/en/ en download de recommended versie. Dan kan je vervolgens in de terminal npm install typen en dan worden de node modules gedownload.
 Voor de controle kan je in de terminal nog node –v typen de versie moet hoger zijn dan 12.0.0, omdat anders de applicatie niet werkt. 
Wij hebben tijdens het maken van de applicatie gewerkt op versie: v16.13.0 op die versie werkt ons dashboard.

NPM Commando's die gebruikt moeten worden
npm install --save @angular-slider/ngx-slider  
npm install ngx-echarts –save  
npm install chart.js --save 
ng add @angular/material  
npm install -g @angular/cli 

De data die wij hebben gebruikt om de verschillende kpi's weer te geven komt uit een mockapi genaamd mockoon.
De reden hiervoor was het kleine tijdsbestek wat we hadden, het visualiseren van de kpi's is sneller verlopen dan dat we met de database zou verbinden. 
De data daarentegen is geen testdata, uit de database zijn van 4 achtereenvolgende uren de data opgehaald en berekend. 
Om deze reden kan voor het vervolg van de applicatie de berekende data die nu in de mockapi staat, uiteraard worden overgezet naar de database. 
Mockoon is de gemakkelijkste en snelste manier om mock-REST-API's te ontwerpen en uit te voeren.
Geen implementatie op afstand, geen account vereist, gratis en open-source. 
Wij hebben deze applicatie gebruikt om mock data te maken waarmee wij de echarts vullen. 
Binnen mockoon kan je een GET of POST request maken naar een localhost:4200 bijvoorbeeld, met een eigen pad (/api/kpis/traveltimes/).
