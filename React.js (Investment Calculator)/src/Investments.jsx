export default function Investments({
  groups,
  investmentValues,
  onInputChange,
}) {
  return (
    <section id="user-input">
      {groups.map((group, groupIndex) => (
        <div className="input-group" key={groupIndex}>
          {Object.keys(group).map((id, index) => (
            <div className="input-container" key={index}>
              <label htmlFor={id}>{group[id]}</label>
              <input
                type="number"
                id={id}
                value={investmentValues[id]}
                min="0"
                onChange={($event) => onInputChange($event.target.value, id)}
                required
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
