# Process Management System

Sistema de procesos para ecommerce tipo Amazon

## Planteamiento del problema

Amazon.com es una de las empresas de e-commerce más conocidas del mundo, ya que su modelo de gestión logística y su cadena de suministro personalizado con su relación con el cliente se halla lejos de ser rivalizado. Este mdelo es potenciado por sistemas tercerizados de envíos y es la envidia, el desafío y quizás una amenaza para muchos actores del sector.

Para que esta empresa se mantenga en la cima del mercado han de mantener todos sus sistemas en optimas condiciones. De estos sistemas destacan su proceso de venta y de compra, su proceso de envio, su gestion del inventario y sus procesos contables.

## Solución Planteada

Para cada uno de los procesos mencionados previamente el sistema se encargara de automatizarlos para ahorrar tiempo del usuario y recursos de la empresa.

* **Proceso de venta (Ecommerce):** La aplicación genera un pedido con sus especificaciones, siendo estas los productos solicitados, la cantidad de los mismos, el costo total del los productos, la direccion a la que se enviara el producto y la compañia con la que se realizara el envio , al generarse es enviado y almacenado con un id, luego los datos del pedido son utilizados por los procesos de inventario, transporte y contabilidad.

* **Proceso de compra (Abastecimiento):** Al igual que el proceso de venta genera un pedido, se diferencia en el volumen del mismo al ser este mayor, y también se utiliza el pedido generado por el proceso de inventario y de contabilidad.

* **Proceso de transporte:** Al realizar una compra empieza el proceso de transporte que involucra la identificación del pedido y la dirección facilitada por el cliente para realizar la entrega, se identifica con un numero de envío y por la compañía que realiza la entrega. A travez de la aplicacion el cliente es capaz de ver el estado de su envio.

* **Proceso de gestión de inventario:** En este proceso se clasifican y archivan los productos obtenidos durante el proceso de compra por tipo de producto y cantidad de unidades, luego en el proceso de venta se descuentan las cantidades solicitadas por el comprador, también se puede generar una lista del inventario almacenado.

* **Proceso de contabilidad:** Durante este proceso se gestionan los ingresos generados durante el proceso de venta y los egresos generados durante el proceso de compra.


## Diagrama de procesos

![diagram](/documentation/diagram.png)

## Estructuras de Datos involucradas

A continuación se describen las estructuras de datos pertinentes al sistema a desarrollar.

### Producto

```js
{
	id: String,
	name: String,
	price: Float,
	description: String,
	availableUnits: Int,
	physicalLocation: {
      lat: Float,
      lng: Float
    },
}
```

### Pedido (Una venta)

```js
{
	id: String
	products: Array<Products>,
	deliveryAddress: {
      address: String,
      lat: Float,
      lng: Float
	},
	orderTotal: Float,
	state: Enum(OrderStates),
	createdDate: DateTime,
	lastUpdate: DateTime
}
```

### Inventario
```js
{
    product: Products,
    amount: Int
}
```

### Compra
```js
{
	id: String,
	products: Array<Products>,
	price: Float,
	description: String
}
```
