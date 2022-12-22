
package diccionario2;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;
import java.util.Scanner;
import java.util.Set;

public class DicionarioEspIngles {
    public static void main(String[] args) {

        System.out.println("Prueba tus conocimientos, escribe la traducción al inglés de cada palabra.");
        
        Scanner sc = new Scanner( System.in);
        HashMap<String, String> traduccion = new HashMap<String, String>();
        Random generator = new Random();

        traduccion.put("Manzana", "Apple");
        traduccion.put("Aire", "Air");
        traduccion.put("Bebé", "Baby");
        traduccion.put("Arte", "Art");
        traduccion.put("Oso", "Bear");
        traduccion.put("Calma", "Calm");
        traduccion.put("Adulto", "Adult");
        traduccion.put("Extranjero", "Abroad");
        traduccion.put("Fresa", "Strawberry");
        traduccion.put("Sandía", "Watermelon");
        traduccion.put("Conejo", "Rabbit");
        traduccion.put("Perro", "Dog");
        traduccion.put("Computadora", "Computer");
        traduccion.put("Naranja", "Orange");
        traduccion.put("Agua", "Water");
        traduccion.put("Zapatos", "Shoes");
        traduccion.put("Amarillo", "Yellow");
        traduccion.put("Arándano", "Cranberry");
        traduccion.put("Morado", "Purple");
        traduccion.put("Cocina", "Kitchen");
Set<String> keySet = traduccion.keySet();
        List<String> keyList = new ArrayList<>(keySet);

        int respuestaCorrecta = 0;
        for(int i = 0; i < 5; i++) {
            int aleatorio = new Random().nextInt(keyList.size());
                String palabraEspañol = keyList.get(aleatorio);
                String palabraIngles = traduccion.get(palabraEspañol);
                System.out.println("La traducción de " + palabraEspañol + " es:");

                String respuesta = sc.nextLine();

            if(respuesta.equals(palabraIngles)) respuestaCorrecta++;
        }
        System.out.println("Respuestas correctas: " + respuestaCorrecta);
    }

}
