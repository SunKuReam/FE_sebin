import './App.css';
import testcloth1 from './mainpage_images/testcloth1.png'
import testcloth2 from './mainpage_images/testcloth2.png'
import testcloth3 from './mainpage_images/testcloth3.png'
import testcloth4 from './mainpage_images/testcloth4.png'

//상품 id, 이름, Url 저장하는 Array
const products = [
  {
    id: 1,
    name: 'Double rasted vest',
    imageUrl: testcloth1
  },
  {
    id: 2,
    name: 'Blelted side pocket pants',
    imageUrl: testcloth2
  },
  {
    id: 3,
    name: '.Mesh bodysuit',
    imageUrl: testcloth3
  },
  {
    id: 4,
    name: 'Classy cashmere jacket',
    imageUrl: testcloth4
  },
];

function App() {
  return (
    <div className="App">
      <header className="Brand Name">
        <h1>SUN</h1>
      </header>
      <div className="product-container">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <p className="product-name">{product.name}</p>
        </div>
      ))}
      </div>
      <div>
        <p>
          MON - FRI AM 10:00 - PM 18:00<br />
          LUNCH TIME PM 12:00 - PM 13:00<br />
          SAT, SUN, HOLIDAY OFF
        </p>
        <p>
          COMPANY SUN OFFICE<br />
          OWNER | BAE SEO HYEON<br />
          TEL 010-8820-4903 | E-MAIL SUNOFFICE@NAVER.COM<br />
          INSTAGRAM | {'  '}
          <a href = 'https://www.instagram.com/sun_office__/' target="_blank" rel="noopener noreferrer">
            @sun_office__
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
