
// Programa en java para mostrar por consola el texto ingresado de forma invertida.


package palabrainvertida;

import java.util.Scanner;

public class PalabraInvertida {

    public static void main(String[] args) {

        Scanner palabra = new Scanner(System.in);


        String palabras;
        String fraseInvertida = "\n";

        System.out.println("Ingrese una frase: ");
        palabras = palabra.nextLine();

        for (int i = palabras.length()-1; i >= 0; i--){
            fraseInvertida += palabras.charAt(i);
        }

        System.out.println("La frase invertida es: " + fraseInvertida);

    }

}