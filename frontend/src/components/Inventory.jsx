const Inventory = ({ items }) => {
    return (
        <div className="inventory">
            <h3>Inventory</h3>
            {items.lenght === 0 ? (
                <p>No items.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            </div>
    );
};

export default Inventory;

//j'ai créé le tableau item et je liste chaque objet avec map 