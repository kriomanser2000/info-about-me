import React from 'react';
import HelloReactCreateElement from './components/HelloReactCreateElement';
const HelloReact = () => 
{
  return <h1>Hello, React</h1>;
};
const PersonalInfo = () => 
{
  return (
    <div>
      <h2>Особиста інформація</h2>
      <p>Ім'я: Кузьменко Олександр</p>
      <p>Контактний телефон: +380123456789</p>
      <p>Електронна адреса: sasa05@gmail.com</p>
    </div>
  );
};
const CityInfo = () => 
{
  return (
    <div>
      <h2>Інформація про місто</h2>
      <p>Назва міста: Кривий Ріг</p>
      <p>Назва країни: Україна</p>
      <p>Рік заснування: 1775 рік</p>
    </div>
  );
};
const App = () => 
{
  return (
    <div>
      <HelloReact />
      <PersonalInfo />
      <CityInfo />
    </div>
  );
};
export default App;