public class API_WeatherMap {
    @AuraEnabled
    public static WeatherAPIResponseResult getResults1(String zipcode, String country){
        WeatherAPIResponseResult resp = new WeatherAPIResponseResult();
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+','+country+'&units=metric&appid=55391b2d7fc413a0b26073c7766c506e');
        request.setMethod('GET');
        HttpResponse response=http.send(request);
        if (response.getStatusCode() == 200) {
            resp = (WeatherAPIResponseResult)JSON.deserialize(response.getBody(), WeatherAPIResponseResult.class);
            
            system.debug('------->'+resp.name);
            system.debug('------->'+resp.weather);
            system.debug('------->'+resp.weather .size());
            for(WeatherAPIResponseResult.Weather w : resp.weather){
                system.debug('------->'+w.icon);
                //http://openweathermap.org/img/wn/01d.png and 01d@2x.png to increase the size
                ////<apex:image id="theImage" value="/img/myimage.gif" width="220" height="55"/>
                system.debug('------->'+w.description);
            }
            system.debug('------->'+resp.main);
            system.debug('------->'+resp.main.temp_min);
            system.debug('------->'+resp.main.temp_max);
        }  
        
        return resp;
    }
}