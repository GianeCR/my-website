"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[535],{9753:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(5893),r=n(1151);const i={},o="Manual de Instalaci\xf3n Docker + GitLab + SSL",c={id:"Instalador/ssl",title:"Manual de Instalaci\xf3n Docker + GitLab + SSL",description:"PRO 1 \\| PRO 2",source:"@site/docs/Instalador/ssl.md",sourceDirName:"Instalador",slug:"/Instalador/ssl",permalink:"/my-website/docs/Instalador/ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Instalador/ssl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manual de instalaci\xf3n",permalink:"/my-website/docs/Instalador/linux"}},l={},d=[{value:"PRO 1 | PRO 2",id:"pro-1--pro-2",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Requisitos previos",id:"requisitos-previos",level:3},{value:"Pasos",id:"pasos",level:3},{value:"Recomendaciones",id:"recomendaciones",level:3}];function t(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"manual-de-instalaci\xf3n-docker--gitlab--ssl",children:"Manual de Instalaci\xf3n Docker + GitLab + SSL"}),"\n",(0,a.jsx)(s.h2,{id:"pro-1--pro-2",children:"PRO 1 | PRO 2"}),"\n",(0,a.jsx)(s.p,{children:"facturaloperu.com 2019"}),"\n",(0,a.jsx)(s.h3,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(s.p,{children:["Hemos elaborado un script para uso en instancias Linux, este es un archivo ",(0,a.jsx)(s.code,{children:".sh"})," que actualiza el sistema, instala las herramientas, sus dependencias, configura un certificado SSL renovable cada 90 d\xedas que debe ser confirmado en el proceso con su dominio y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos. Su ejecuci\xf3n es muy sencilla."]}),"\n",(0,a.jsx)(s.h3,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Tener acceso a su servidor, VPS, m\xe1quina virtual o local v\xeda SSH. En las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave SSH que puede ser un archivo ",(0,a.jsx)(s.code,{children:".ppk"})," o ",(0,a.jsx)(s.code,{children:".pem"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Tener instalada una versi\xf3n de SSH en su m\xe1quina para conectarse de manera remota. Puede utilizar Putty, FileZilla o una consola terminal."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Es importante configurar su dominio apuntando a la IP de su instancia para que durante la ejecuci\xf3n del script se valide el certificado SSL y al finalizar la ejecuci\xf3n no tenga errores y todo est\xe9 listo para realizar pruebas. Edite los registros A y CNAME donde A debe contener su IP y CNAME el valor ",(0,a.jsx)(s.code,{children:"*"})," (asterisco) para que se tomen los subdominios registrados por la herramienta."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(5540).Z+"",width:"523",height:"285"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Durante la ejecuci\xf3n del script deber\xe1 almacenar en su dominio dos registros TXT con unos valores que se mostrar\xe1n en pantalla, estos registros son validados en directo y no pueden tardar m\xe1s de 2 minutos en validarse en su dominio."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"En caso de contar con servicios instalados en su instancia como MySQL, Apache o Nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usarse con el aplicativo y los contenedores de Docker."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"pasos",children:"Pasos"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Acceder a su instancia v\xeda SSH."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Loguearse como super usuario, ejecute ",(0,a.jsx)(s.code,{children:"sudo su"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Ubicarse en la carpeta del usuario, por ejemplo ",(0,a.jsx)(s.code,{children:"cd /home/ubuntu/"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Crear el archivo ",(0,a.jsx)(s.code,{children:"install.sh"}),", ejecute ",(0,a.jsx)(s.code,{children:"touch install.sh"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Editar el archivo con su editor preferido, ejecute ",(0,a.jsx)(s.code,{children:"nano install.sh"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["En el archivo debe agregar el contenido del siguiente enlace: ",(0,a.jsx)(s.a,{href:"https://gitlab.com/snippets/1852652",children:"https://gitlab.com/snippets/1852652"}),". Observar\xe1 una p\xe1gina como la siguiente, donde debe copiar el contenido del script y pegarlo en su archivo ",(0,a.jsx)(s.code,{children:"install.sh"}),", es importante que mantenga la estructura del mismo."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(4670).Z+"",width:"564",height:"338"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Para salir del editor y guardar puede presionar ",(0,a.jsx)(s.code,{children:"ctrl + x"}),", seguidamente se le consultar\xe1 si desea guardar los cambios, confirme con ",(0,a.jsx)(s.code,{children:"y"})," y luego ",(0,a.jsx)(s.code,{children:"enter"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Debe darle permisos de ejecuci\xf3n al archivo, ejecute ",(0,a.jsx)(s.code,{children:"chmod +x install.sh"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"El comando a utilizar requiere de dos par\xe1metros principalmente:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"./install.sh [repositorio] [dominio]\n"})}),"\n",(0,a.jsx)(s.p,{children:"Por ejemplo:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"./install.sh [https://gitlab.com/rash07/facturadorpro2](https://gitlab.com/rash07/facturadorpro2) elfacturador.com\n"})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://gitlab.com/rash07/facturadorpro2",children:"https://gitlab.com/rash07/facturadorpro2"}),"\r\nelfacturador.com"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Una vez ejecutado el comando se iniciar\xe1 un proceso donde debe ir aceptando las preguntas y que le mostrar\xe1 en pantalla los valores que debe a\xf1adir en los 2 registros tipo TXT de su dominio con nombre\r\na. ",(0,a.jsx)(s.strong,{children:"_acme-challenge.example.com"})]}),"\n",(0,a.jsxs)(s.p,{children:["b. ",(0,a.jsx)(s.strong,{children:"_acme-challenge"})," (casos como godday y puntope) en la siguiente imagen le muestran el valor como ",(0,a.jsx)(s.strong,{children:"v703JW"}),"... deber\xe1 copiarlo y a\xf1adirlo al primer record TXT, seguidamente pulsar enter. Se le mostrar\xe1 en pantalla un segundo valor para el segundo TXT."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(6656).Z+"",width:"533",height:"144"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Editados los registros en su dominio, deber\xe1 aceptar para continuar y que el proceso verifique que sea exitoso, de ser exitoso obtendr\xe1 una pantalla similar a la siguiente"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(2717).Z+"",width:"537",height:"262"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Continuar\xe1 el proceso de actualizaci\xf3n del sistema, se le solicitar\xe1 el usuario y contrase\xf1a de GitLab, para que se pueda clonar/descargar el proyecto en su instancia, luego culminar\xe1 y tendr\xe1 los accesos listos en su dominio:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"Correo: [admin@gmail.com](mailto:admin@gmail.com)\r\nContrase\xf1a: 123456\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Una vez finalizado, puede proseguir con el manual de pruebas o dem\xe1s documentaci\xf3n de cada proyecto, sus URL son:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"PRO1:"}),"\r\n",(0,a.jsx)(s.a,{href:"https://gitlab.com/rash07/facturadorpro1",children:"https://gitlab.com/rash07/facturadorpro1"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"PRO2:"}),"\r\n",(0,a.jsx)(s.a,{href:"https://gitlab.com/rash07/facturadorpro2",children:"https://gitlab.com/rash07/facturadorpro2"})]}),"\n",(0,a.jsx)(s.h3,{id:"recomendaciones",children:"Recomendaciones"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Luego de instalar el facturador puede cambiar algunos par\xe1metros en el archivo ",(0,a.jsx)(s.code,{children:".env"})," como:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"La direcci\xf3n de env\xedo de correos que utiliza el facturador para enviar los archivos pdf, xml y cdr a sus clientes"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Cambiar algunas configuraciones de plantillas de los pdf \u25cb entre otros."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Recuerde que siempre que se edita el archivo ",(0,a.jsx)(s.code,{children:".env"})," debe utilizar el comando ",(0,a.jsx)(s.code,{children:"php artisan config:cache"})," dentro del contenedor de fpm1, para m\xe1s detalles puede observar el ",(0,a.jsx)(s.a,{href:"https://docs.google.com/document/d/11PI1a9yjCPfH9CCuWmJSrdj1V8IEUffqurqvdkw29co/edit?usp=sharing",children:"manual de actualizaci\xf3n"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"La ruta donde ejecute el script ser\xe1 donde se clone el repositorio, debe verificar que los usuarios del servidor tengan permisos a dicha ruta si desea acceder desde FTP o SCP."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},5540:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-1-4db466ce69d821a3344f53e8e8977506.png"},6656:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-2-af3698bd0ebcb2c82711c349fc06e75d.png"},2717:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-3-c446b887422211fca912cb9fdc2579bf.png"},4670:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-b2b3bec64f5aedb96bbf82c3f0762f48.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>o});var a=n(7294);const r={},i=a.createContext(r);function o(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);