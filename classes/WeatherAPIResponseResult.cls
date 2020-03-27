public class WeatherAPIResponseResult { 
    @AuraEnabled
    public Weather[] weather {get;set;}
    public class Weather {
        @AuraEnabled
        public String icon {get;set;}
        @AuraEnabled
        public String description {get;set;}
    }
    public Main main {get;set;}
    public class Main{
        @AuraEnabled
        public String temp_min {get;set;}
        @AuraEnabled
        public String temp_max {get;set;}
    }
    @AuraEnabled
    public String name {get;set;}
}