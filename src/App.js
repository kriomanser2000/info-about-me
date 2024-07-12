import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form';
class PersonalInfo extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      name: "Ваше Ім'я",
      phone: "Ваш телефон",
      email: "ваша.email@example.com",
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetValues = this.resetValues.bind(this);
  }
  handleChange(event) 
  {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  resetValues() 
  {
    this.setState({
      name: "Ваше Ім'я",
      phone: "Ваш телефон",
      email: "ваша.email@example.com",
    });
  }
  render() 
  {
    return (
      <div>
        <h2>Особиста інформація</h2>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Контактний телефон:
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Електронна адреса:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button onClick={this.resetValues}>Скинути значення</button>
      </div>
    );
  }
}
const CityInfo = () => 
{
  const { register, handleSubmit, reset } = useForm({
    defaultValues: 
    {
      city: "Ваше місто",
      country: "Ваша країна",
      foundationYear: "Рік заснування",
    },
  });
  const onSubmit = (data) => 
  {
    console.log(data);
  };
  const resetValues = () => 
  {
    reset({
      city: "Ваше місто",
      country: "Ваша країна",
      foundationYear: "Рік заснування",
    });
  };
  const cities = 
  [
    { name: "Київ", country: "Україна", foundationYear: 482 },
    { name: "Львів", country: "Україна", foundationYear: 1256 },
    { name: "Одеса", country: "Україна", foundationYear: 1794 },
    { name: "Дніпро", country: "Україна", foundationYear: 1776 },
  ];
  return (
    <div>
      <h2>Інформація про місто</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Назва міста:
          <input type="text" {...register("city")} />
        </label>
        <br />
        <label>
          Назва країни:
          <input type="text" {...register("country")} />
        </label>
        <br />
        <label>
          Рік заснування:
          <input type="text" {...register("foundationYear")} />
        </label>
        <br />
        <button type="submit">Зберегти</button>
        <button type="button" onClick={resetValues}>
          Скинути значення
        </button>
      </form>
      <h3>Міста України:</h3>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <h4>{city.name}</h4>
            <p>Країна: {city.country}</p>
            <p>Рік заснування: {city.foundationYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
const App = () => 
{
  return (
    <div>
      <HelloReact />
      <HelloReactCreateElement />
      <PersonalInfo />
      <CityInfo />
    </div>
  );
};
const HelloReact = () => 
{
  return <h1>Hello, React</h1>;
};
const HelloReactCreateElement = () => 
{
  return React.createElement('h1', null, 'Hello, React');
};
export default App;