import React, { useState, useCallback } from 'react';
import '../css/contact_form.css';

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validate = useCallback(() => {
    const errs = {};
    if (!values.name.trim()) errs.name = 'Имя обязательно';
    if (!/^(?:\+7|8)\d{10}$/.test(values.phone)) errs.phone = 'Неверный формат телефона';
    if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(values.email)) errs.email = 'Неверный Email';
    if (!values.message.trim()) errs.message = 'Сообщение не может быть пустым';
    return errs;
  }, [values]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setValues({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className="contact-container">
      <h2>Свяжитесь с нами</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <div className="field">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="field">
            <input
              type="text"
              name="phone"
              placeholder="Номер телефона"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <div className="field">
          <input
            type="email"
            name="email"
            placeholder="Email адрес"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="field">
          <textarea
            name="message"
            placeholder="Сообщение"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">СВЯЖИТЕСЬ С НАМИ</button>
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Спасибо за ваше сообщение!</h3>
            <p>Мы скоро с вами свяжемся.</p>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;