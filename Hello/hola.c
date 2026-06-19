#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{   
    int continuar = 1;
    while (continuar == 1)
    {
    //esto hace qeu cada intento elija un nuvo numero
    srand(time(NULL));
    int intentos = 0;
    int numero_correcto = rand()%10+1;
    int respuesta = 0;
    
    srand((unsigned)time(NULL));

    while (continuar)
    {
        int intentos = 0;
        int numero_correcto = rand() % 10 + 1;
        int respuesta = 0;

        while (intentos < 3 && respuesta != numero_correcto)
            {
                printf("escribe un numero entre 1 y 10: ");
                scanf("%d",&respuesta);
                if (respuesta == numero_correcto)
                {
                    printf("Ganaste suertudo -.-!!\n");
                    
                    
                }
                else 
                {
                    printf("Jaja intentalo denuevo\n");
                    printf("Te quedan %d intentos\n", 2 - intentos);
                    intentos++;
                }
                
            }
        
    // esto hace qeu se repita bajo dos condiciones| los intentos sean menor que 3| la resopuesta sea incorrecta|
    
        if (respuesta != numero_correcto)
        {
            printf("El numero correcto era: %d\n", numero_correcto);
        }
        printf("Jugar de nuevo? 1=si 0=no: ");
        scanf("%d", &continuar);
    }
    }
}

