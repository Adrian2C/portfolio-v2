/// organizacion de carpetas sass <br>

/// En cada carpeta se añade un archivo '<br>_index</br>', que reciba mediante un @forward todas las modificaciones y archivos contenidos en la carpeta, sin el '_x' de cada archivo, se usan en la carpeta que queramos usar con el '@use (carpeta) as (letra o * para global)'

ej:
@use '../utils' as a;

.card{
    font-size:a.$font.size;
}


y a cada archivo se le agrega el 

<br>
/// <b>sass</b>/<br>
/// |<br>
/// |– <b>base</b>/ <br>
/// |   |– _reset.scss       # Reset/normalize<br>
/// |   |– _typography.scss  # Reglas tipográficas<br>
/// |   |– _animation.scss   # Reglas para animaciones si hay muchas<br>
/// |<br>
/// |– <b>components</b>/ --> comps pequeños, widgets, slider, loader, widget,<br>
/// |   |– _buttons.scss     # Botones<br>
/// |   |– _carousel.scss    # Carousel<br>
/// |   |– _cover.scss       # Cubierta<br>
/// |   |– _dropdown.scss    # Dropdown<br>
/// |   …                    # Etc.<br>
/// |<br>
/// |– <b>layout</b>/(o partials)  --> distribucion del sitio. estilo de las partes principales del sitio, sistema de grid, o css para forms<br>
/// |   |– _navigation.scss  # Navegación<br>
/// |   |– _grid.scss        # Sistema de retícula<br>
/// |   |– _header.scss      # Encabezamiento<br>
/// |   |– _footer.scss      # Pie de página<br>
/// |   |– _sidebar.scss     # Barra lateral<br>
/// |   |– _forms.scss       # Formularios<br>
/// |   …                    # Etc.<br>
/// |<br>
/// |– <b>pages</b>/<br>
/// |   |– _home.scss        # Estilos específicos para la página de inicio<br>
/// |   |– _contact.scss     # Estilos específicos para cualquier pagina(contact en  este caso)<br>
/// |   …                    # Etc.<br>
/// |
/// |– <b>themes</b>/ puede ser usado para light/dark, etc<br>
/// |   |– _theme.scss       # Tema por defecto<br>
/// |   |– _admin.scss       # Tema del administrador<br>
/// |   …                    # Etc.<br>
/// |<br>
/// |– <b>utils</b>/ --> reune todas las herramientas y helpers. funciones, mixin, global, placeholder. solo addons, nada de codigo.<br>
/// |   |– _variables.scss   # Variables Sass<br>
/// |   |– _functions.scss   # Funciones Sass<br>
/// |   |– _mixins.scss      # Mixins Sass<br>
/// |   |– _helpers.scss     # Clases & placeholders<br>
/// |<br>
/// |– <b>vendors</b>/--> archivos de librerias y framworks.<br>
/// |   |– _bootstrap.scss   # Bootstrap<br>
/// |   |– _normalize.scss   # normalize<br>
/// |   |– _jquery-ui.scss   # jQuery UI<br>
/// |   …                    # Etc.<br>
/// |<br>
/// |<br>
/// `– <b>main.scss</b>             # Archivo principal de Sass<br>
<br>
<br>
