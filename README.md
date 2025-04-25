# ֎ Proyecto Plataforma web BankNet

Plataforma web bancaria desarrollada con **Next.js** (frontend), **Java Web** (backend) y base de datos **MySQL**

![image](https://github.com/user-attachments/assets/1f28e5de-5af2-406d-9753-091eecc9d790)

## Integrantes

- **Arnold Derian Juarez Jimenez** - ArnoldJuarez
Roberto Alonso Tejada Palomino - rtp-robinson
Fran Erick Ortiz Cano - VeNoNs
Cristopher Rubén Torres Castillo - cristofer951746
Hildher Aimar Prieto Cuno - AimarPriCu
Jose Carlos Ugarte Condori - JoseUG04

## Metodología SCRUM
Para esta primera entrega del proyecto, se ha usado la metodología SCRUM.
📅 Sprint 0 – Preparación 
Objetivo: Conformar equipo y preparar backlog inicial.

| Rol | Responsable |
|-----|-------------|
|Product Owner| Gonzalo Garcia Martinez |
|Scrum Master| Frank Ortiz  |
|Developers| Arnold Juarez, Aimar Prieto, Roberto Tejada, Christopher Torres, Jose Ugarte|

## Product Backlog inicial.

Herramientas a utilizar:
- **Frontend:** Next.js 
- **Backend:** Java
- **Base de Datos:** Mysql
- **Arquitectura:** Microservicios (Backend)- 
- **Control de versiones:** Git + GitHub.



## Requerimientos Funcionales

- **RF1:** El sistema debe permitir abrir una cuenta de ahorros.
- **RF2:** El sistema debe permitir ingresar con un usuario y contraseña para visualizar sus detalles de cuenta.
- **RF3:** El sistema tendrá la opción de restablecer la cuenta.
- **RF4:** El sistema dividirá su visibilidad de uso mediante roles de usuario (clientes y administrador)
- **RF5:** El usuario cliente podrá modificar datos opcionales de su cuenta registrada.
- **RF6:** El usuario podrá visualizar sus cuentas de ahorro.
- **RF7:** El usuario podrá realizar transferencias a sus propias cuentas y a cuentas de usuario del mismo banco.
- **RF8:** El usuario podrá pagar servicios públicos con sus cuentas de ahorro.
- **RF9:** El usuario podrá visualizar sus últimas operaciones realizadas por cada cuenta de ahorro.
- **RF10:** El usuario recibirá notificaciones por las operaciones realizadas a sus cuentas.
- **RF11:** El usuario administrador podrá ingresar a su cuenta y tener un panel de control.
- **RF12:** El usuario administrador podrá realizar búsquedas por filtros de datos de los  usuarios. 
- **RF13:** El usuario administrador podrá realizar búsquedas por filtros de datos de las cuentas de ahorro. 
- **RF14:** El usuario administrador podrá realizar búsquedas por filtros de datos de las operaciones.



## Requerimientos No Funcionales 

- **RNF1:** El sistema debe tener una respuesta inferior a 2 segundos.
- **RNF2:** Seguridad en la información y cuentas bancarias de los usuarios.
- **RNF3:** La UI (Interfaz) debe ser intuitiva y fácil de usar para usuarios sin experiencia técnica.
- **RNF4:** Debe ser compatible con diferentes dispositivos
- **RNF5:** Toda información sensible como contraseñas o datos bancarios, deben estar cifradas durante su tránsito y almacenamiento.
- **RNF6:** En caso de error del sistema, el propio sistema debe enviar un mensaje de error para indicar la falla correspondiente.
- **RNF7:** Toda información sensible como contraseñas o datos bancarios, deben estar cifradas durante su tránsito y almacenamiento
- **RNF8:** El sistema debe permitir mantener sesiones activas por lo menos 15 minutos de inactividad, después de ello, la sesión se cerrará automáticamente.

## HISTORIA DE USUARIO POR CADA REQUISITO FUNCIONAL
### 📌 Historias de Usuario – Product Backlog

| ID   | Historia de Usuario                                                                 | Rol            | Objetivo funcional                                                    | Criterios de Aceptación                                                                  |
|------|--------------------------------------------------------------------------------------|----------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| HU1  | Como usuario nuevo, quiero registrar una cuenta para abrir una cuenta de ahorros.   | Cliente        | Crear cuenta                                                           | Formulario con validaciones, botón para registrar, confirmación visual.                  |
| HU2  | Como usuario, quiero iniciar sesión con usuario y contraseña para acceder al sistema.| Cliente        | Login seguro                                                           | Campos visibles, validaciones, acceso al dashboard al ingresar credenciales correctas.   |
| HU3  | Como usuario, quiero poder restablecer mi cuenta si olvido mis credenciales.         | Cliente        | Recuperación de cuenta                                                 | Opción visible en login, flujo de recuperación con correo o validación.                  |
| HU4  | Como usuario, quiero acceder según mi rol para ver solo lo que me corresponde.       | Cliente/Admin  | Control de acceso por roles                                            | Usuario ve solo su panel, Admin accede a funcionalidades administrativas.                |
| HU5  | Como cliente, quiero modificar mis datos opcionales en mi cuenta.                    | Cliente        | Edición de perfil                                                      | Vista de perfil editable, botón guardar, mensajes de éxito/error.                        |
| HU6  | Como cliente, quiero visualizar mis cuentas de ahorro registradas.                   | Cliente        | Ver cuentas                                                            | Tabla/lista de cuentas, datos relevantes, actualizados.                                  |
| HU7  | Como cliente, quiero transferir dinero a mis cuentas o a otras cuentas del banco.    | Cliente        | Transferencias internas                                                | Formulario con origen, destino, monto, confirmación de operación.                        |
| HU8  | Como cliente, quiero pagar servicios públicos desde mis cuentas de ahorro.           | Cliente        | Pago de servicios                                                      | Opción con formulario, lista de servicios, comprobante visual.                           |
| HU9  | Como cliente, quiero ver el historial de operaciones recientes de mis cuentas.       | Cliente        | Operaciones recientes                                                  | Lista ordenada por fecha, tipo, monto, con filtros opcionales.                           |
| HU10 | Como cliente, quiero recibir notificaciones por las operaciones realizadas.          | Cliente        | Alertas y notificaciones                                               | Mensajes visuales o por email con detalles de la operación realizada.                    |
| HU11 | Como administrador, quiero ingresar a un panel de control con mis herramientas.      | Administrador  | Dashboard de administración                                            | Acceso desde login admin, interfaz con vistas para control.                              |
| HU12 | Como administrador, quiero buscar usuarios por filtros específicos.                  | Administrador  | Gestión de usuarios                                                    | Filtros por nombre, correo, estado, fecha de creación, etc.                              |
| HU13 | Como administrador, quiero buscar cuentas por filtros específicos.                   | Administrador  | Gestión de cuentas bancarias                                           | Filtros por tipo de cuenta, estado, saldo, fecha de apertura, etc.                       |
| HU14 | Como administrador, quiero filtrar operaciones por distintos criterios.              | Administrador  | Gestión de operaciones                                                 | Filtros por fecha, tipo, usuario, cuenta origen/destino.                                 |

 
## Atributos de Calidad del Software
 
Rendimiento : Carga rápida de páginas y respuestas a las acciones del usuario.
Seguridad: Protección de datos mediante autenticación, tokens y encriptación.
Escalabilidad: Capacidad de crecimiento horizontal con microservicios.
Usabilidad: Interfaz clara y simple para cualquier usuario.


### 🧾 Historias de Usuario – Sprint 1 (Maquetación Frontend)

| ID   | Historia de Usuario                                                                 | Rol            | Objetivo funcional                                                      | Criterios de Aceptación                                                                                      | Estimación (Pts) |
|------|--------------------------------------------------------------------------------------|----------------|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|------------------|
| HU1  | Como usuario nuevo, quiero registrar una cuenta para abrir una cuenta de ahorros.   | Cliente        | Crear cuenta                                                           | Formulario con campos visibles, botón de registro, validaciones visuales.                                    | 2                |
| HU2  | Como usuario registrado, quiero iniciar sesión para acceder al sistema.              | Cliente        | Login con opción de restablecer cuenta                                 | Campos usuario/contraseña, botón login, link restablecer cuenta, mensajes visuales.                          | 2                |
| HU3  | Como usuario, quiero una página principal con navegación clara.                      | Cliente/Admin  | Página de inicio con navbar                                            | Navbar funcional (maquetado), accesos visuales a las otras vistas.                                           | 2                |
| HU4  | Como cliente, quiero ver y editar mis datos personales.                              | Cliente        | Ver y modificar datos desde una vista de perfil                        | Mostrar info editable, campos visuales con botón “guardar” o similar (sin lógica aún).                       | 5                |
| HU5  | Como cliente, quiero ver mis operaciones recientes.                                   | Cliente        | Vista de operaciones                                                   | Tabla de movimientos dummy, columnas representativas, scroll o paginación.                                   | 5                |
| HU6  | Como cliente, quiero ver el historial completo de mis movimientos.                   | Cliente        | Acceder a transacciones completas                                      | Tabla extendida con filtros por fecha/tipo de operación.                                                     | 5                |
| HU7  | Como administrador, quiero tener un panel con acceso a vistas de gestión.            | Administrador  | Dashboard con navegación para cuentas, usuarios y operaciones          | Menú lateral, secciones simuladas con tablas sin conexión a datos reales.                                    | 5                |
| HU8  | Como administrador, quiero aplicar filtros por usuarios, cuentas y operaciones.      | Administrador  | Buscar datos con filtros visuales                                      | Campos de búsqueda, selects, inputs, rangos de fecha visibles.                                               | 5                |


## SPRINT PLANNING MEETING
Fecha de inicio del Sprint: 1 de abril, 2025.
Fecha de cierre del Sprint: 24 de mayo, 2025.
Duración del Sprint: 4 semanas.
Historias seleccionadas para el Sprint:
- **RF1:** Crear cuenta
- **RF2:** Iniciar sesión (con recuperación de cuenta)
- **RF5:** Editar datos del usuario
- **RF6:** Ver cuentas
- **RF9:** Ver operaciones recientes
- **RF11:** Dashboard administrador
- **RF12-RF14:** Filtros por usuario, cuentas y operaciones


## SPRINT BACKLOG (MAQUETACION DE VISTAS )
Objetivo: Diseñar e implementar a estructura visual de las interfaces, dejando preparado el terreno para conectar con el backend en los siguientes sprints.
Historias seleccionadas y TIEMPO:
 POKER PLANNING 
0 1 1 2 3 5 8 13 	
| Nombre   | Responsabilidad técnica           | TIEMPO      |
|----------|------------------------------------|----------------|
| Jose    | Login de usuarios                  |	2	 |
| Arnold     |Crear Cuenta		 | 2      |
| Roberto | Página principal/Inicio                 | 2      |
| Christopher   | User(Datos)/operaciones               | 5      |
| Aimar   | Historial Movimientos/filtros usuarios   | 5      |
| Frank    | Filtro cuenta/filtro movimientos	| 5      |


## Instalación del Proyecto
1. Clonar el repositorio:
https://github.com/daswsi-utp/Frontend_Bank.git


