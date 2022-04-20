from django.shortcuts import render
from firebase import firebase
import numpy as np 
# from rest_framework.parsers import JSONParses
from django.views.decorators.csrf import csrf_exempt
import pickle
from efarma import config
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes

def weather_fetch(city_name):
    """
    Fetch and returns the temperature and humidity of a city
    :params: city_name
    :return: temperature, humidity
    """
    api_key = config.weather_api_key
    base_url = "http://api.openweathermap.org/data/2.5/weather?"

    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    x = response.json()

    if x["cod"] != "404":
        y = x["main"]

        temperature = round((y["temp"] - 273.15), 2)
        humidity = y["humidity"]
        return temperature, humidity
    else:
        return None

@api_view(('POST','GET',))
@permission_classes((permissions.AllowAny,))
def crop_prediction(request):
    permission_classes = [permissions.IsAuthenticated]
    if request.method == 'POST':
        N = float(request.form['nitrogen'])
        P = float(request.form['phosphorous'])
        K = float(request.form['pottasium'])
        ph = float(request.form['ph'])
        rainfall = float(request.form['rainfall'])
        city = request.form.get("city")

        if weather_fetch(city) != None:
            temperature, humidity = weather_fetch(city)
            data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
            my_prediction = pickle.load(open('cropRecommendationBackend\\model\\model.pkl','rb'))
            final_prediction=my_prediction.predict(data)
            value=final_prediction[0]
            firebase =firebase.FirebaseApplication('https://e-farma-5dc42-default-rtdb.firebaseio.com/')
            result=firebase.get(final_prediction,None)
            return Response(result)
        
        else: return Response("po")
    else: return Response("gho")
    











            
