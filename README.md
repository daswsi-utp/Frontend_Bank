# ֎ Proyecto Plataforma web BankNet

Plataforma web bancaria desarrollada con **Next.js** (frontend), **Java Web** (backend) y base de datos **MySQL**

![image](https://github.com/user-attachments/assets/1f28e5de-5af2-406d-9753-091eecc9d790)

## Metodología SCRUM
Para esta primera entrega del proyecto, se ha usado la metodología SCRUM.
📅 Sprint 0 – Preparación 
Objetivo: Conformar equipo y preparar backlog inicial.

| Rol | Responsable |
|-----|-------------|
|Product Owner| Gonzalo Garcia Martinez |
|Scrum Master| Frank Ortiz  |
|Developers| Arnold Juarez, Aimar Prieto, Roberto Tejada, Christopher Torres, Jose Ugarte|

Crear el Product Backlog inicial.

Herramientas a utilizar:
- **Frontend:** Next.js 
- **Backend:** Java
- **Base de Datos:** Mysql
- **Arquitectura:** Microservicios (Backend)- 
- **Control de versiones:** Git + GitHub.

## 👥 Roles y equipo de trabajo 

| Nombre   | Responsabilidad técnica           | Rol Scrum      |
|----------|------------------------------------|----------------|
| Jose    | Login de usuarios                  |			 |
| Arnold     |Crear Cuenta		 | MODALES      |
| Roberto | Página principal/Inicio                 | NAVBAR/MODALES      |
| Christopher   | User(Datos)/operaciones               | NAVBAR      |
| Aimar   | Historial Movimientos/filtros usuarios   | NAVBAR      |
| Frank    | Filtro cuenta/filtro movimientos	| NAVBAR      |

--- 

## Requerimientos Funcionales

- **RF1:** El sistema debe permitir abrir una cuenta de ahorros.
- **RF2:** El sistema debe permitir ingresar con un usuario y contraseña para visualizar sus detalles de cuenta.
- **RF3:** El sistema tendrá la opción de restablecer la cuenta.
- **RF4:** El sistema dividirá su visibilidad de uso mediante roles de usuario (clientes y administrador)
- **RF5:** El usuario cliente podrá modificar datos opcionales de su cuenta registrada.
- **RF6:** El usuario podrá visualizar sus cuentas de ahorro.
- **RF7:** El usuario podrá realizar transferencias a sus propias cuentas y a cuentas de usuario del mismo banco.
- **RF8:** el usuario podrá pagar servicios públicos con sus cuentas de ahorro.
- **RF9:**El usuario podrá visualizar sus últimas operaciones realizadas por cada cuenta de ahorro.
- **RF10:**El usuario recibirá notificaciones por las operaciones realizadas a sus cuentas.
- **RF11:**El usuario administrador podrá ingresar a su cuenta y tener un panel de control.
- **RF12:**El usuario administrador podrá realizar búsquedas por filtros de datos de los  usuarios. 
- **RF13:**El usuario administrador podrá realizar búsquedas por filtros de datos de las cuentas de ahorro. 
- **RF14:** El usuario administrador podrá realizar búsquedas por filtros de datos de las operaciones.
- 
--- 

## Requerimientos No Funcionales 

- **RNF1:** El sistema debe tener una respuesta inferior a 2 segundos.
- **RNF2:** Seguridad en la información y cuentas bancarias de los usuarios.
- **RNF3:** La UI (Interfaz) debe ser intuitiva y fácil de usar para usuarios sin experiencia técnica.
- **RNF4:** Debe ser compatible con diferentes dispositivos
- **RNF5:** Toda información sensible como contraseñas o datos bancarios, deben estar cifradas durante su tránsito y almacenamiento.
- **RNF6:**En caso de error del sistema, el propio sistema debe enviar un mensaje de error para indicar la falla correspondiente.
- **RNF7:**Toda información sensible como contraseñas o datos bancarios, deben estar cifradas durante su tránsito y almacenamiento
- **RNF8:**El sistema debe permitir mantener sesiones activas por lo menos 15 minutos de inactividad, después de ello, la sesión se cerrará automáticamente.

---
 
## Atributos de Calidad del Software
 
Rendimiento : Carga rápida de páginas y respuestas a las acciones del usuario.
Seguridad: Protección de datos mediante autenticación, tokens y encriptación.
Escalabilidad: Capacidad de crecimiento horizontal con microservicios.
Usabilidad: Interfaz clara y simple para cualquier usuario.

---  
 
## Instalación del Proyecto
1. Clonar el repositorio:
https://github.com/daswsi-utp/Frontend_Bank.git

