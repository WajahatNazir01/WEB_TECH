import './card.css';

function Card() {
    return (
        <div className="product-card">
            <div className="image-container">
                <img 
                    src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=880&auto=format&fit=crop" 
                    alt="Diamond Ring" 
                />
            </div>
            
            <div className="card-content">
                <h1 className="title">Premium Cut Diamond Ring</h1>
                <p className="description">Organically produced 4D cut premium pink diamond with a lifetime warranty.</p>
                
                <div className="footer">
                    <div className="price-info">
                        <span className="amount">$5000</span>
                        <span className="shipping">+ Free Delivery</span>
                    </div>
                    <button className="add-btn">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;