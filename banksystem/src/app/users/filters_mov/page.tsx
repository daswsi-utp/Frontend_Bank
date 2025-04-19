export default function MovementFilters() {
  return (
    <div>
      <h3>Filtros de Movimientos</h3>
      <form>
        <div>
          <label>Fecha desde:</label>
          <input type="date" />
        </div>
        <div>
          <label>Fecha hasta:</label>
          <input type="date" />
        </div>
        <div>
          <label>Tipo de movimiento:</label>
          <select>
            <option>Todos</option>
            <option>Ingreso</option>
            <option>Egreso</option>
          </select>
        </div>
        <button type="submit">Aplicar Filtros</button>
      </form>
    </div>
  )
}