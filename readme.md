api con nodejs para lectura desde archivo json

consultas e introducción de agentes y pruebas

prueba: 
npm   run dev //para desarrollo
npm run start //para producción


rutas :
GET
    /
    /agentes
    /agentes/count
    /agentes/filter?codigo=111
    /agentes/search?q=baja
    /agentes/:id


    /tecnicas
    /tecnicas/count
    /tecnicas/filter?codigo=111
    /tecnicas/search?q=baja
    /tecnicas/:id
POST
    /agentes
     /tecnicas
PATCH
    /agentes/:id
     /tecnicas/:id
DELETE  
    /agentes/:id
     /tecnicas/:id


/cervezas
/cervezas/id
/auth/login
/auth/register
/protected/
/protected/users

