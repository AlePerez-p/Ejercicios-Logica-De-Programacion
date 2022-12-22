
package diccionario;

import java.util.HashMap;
import java.util.Scanner;

public class DiccionarioInglesEsp {

    public static void main(String[] args) {

         System.out.println("Diccionario Ingles - Español");
        
         HashMap<String, String> dictionary = new HashMap<String, String>();


        dictionary.put("Apple", "Manzana");
        dictionary.put("Air", "Aire");
        dictionary.put("Baby", "Bebé");
        dictionary.put("Art", "Arte");
        dictionary.put("Bear", "Oso");
        dictionary.put("Calm", "Calma");
        dictionary.put("Adult", "Adulto");
        dictionary.put("Abroad", "Extranjero");
        dictionary.put("Strawberry", "Fresa");
        dictionary.put("Watermelon", "Sandía");
        dictionary.put("Rabbit", "Conejo");
        dictionary.put("Dog", "Perro");
        dictionary.put("Computer", "Computadora");
        dictionary.put("Orange", "Naranja");
        dictionary.put("Water", "Agua");
        dictionary.put("Shoes", "Zapatos");
        dictionary.put("Yellow", "Amarillo");
        dictionary.put("Cranberry", "Arándano");
        dictionary.put("Purple", "Morado");
        dictionary.put("Kitchen", "Cocina");



        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese una palabra en inglés: ");
        String palabraIngles = scanner.nextLine();
        String traducion = dictionary.get(palabraIngles);

        if ( traducion != null) {
            System.out.println("Traducción: " + traducion);
        } else {
            System.out.println("Lo siento, la palabra no esta en el diccionario.");
        }


    }

}