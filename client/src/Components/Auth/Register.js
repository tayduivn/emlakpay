import React, {useState} from 'react'
import {Link} from 'react-router-dom';
const Register = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
    password2:''
  });
  const {email, password, password2} = formData
  const onChange = e => setFormData({...formData, [e.target.name]:e.target.value })
  const onSubmit = e =>{
      e.preventDefault();
      if(password !== password2){
          console.log('Şifreler eşleşmemektedir.')
      }else{
          console.log(formData)
      }
  }
  return (
    <div id="page-content">
        <div className="container">
            <ol className="breadcrumb">
                <li><Link to="/">Anasayfa</Link></li>
                <li className="active">Üye Ol</li>
            </ol>
        </div>

        <div className="container">
            <header><h1>Üye Ol</h1></header>
            <div className="row">
                <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                    <form id="form-create-account" onSubmit={e=>onSubmit(e)} >
                        <div className="form-group">
                            <label htmlFor="form-create-account-email">E-posta:</label>
                            <input type="email" className="form-control" id="form-create-account-email" name='email' value={email} onChange={e=>onChange(e)} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-create-account-password">Şifre:</label>
                            <input type="password" className="form-control" id="form-create-account-password" name='password' value={password} onChange={e=>onChange(e)} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-create-account-confirm-password">Şifre (Tekrar):</label>
                            <input type="password" className="form-control" id="form-create-account-confirm-password" name='password2' value={password2} onChange={e=>onChange(e)} required/>
                        </div>
                        <div className="form-group clearfix">
                            <button type="submit" className="btn pull-right btn-default" id="account-submit">Hesap Oluştur</button>
                        </div>
                    </form>
                    <hr/>
                    <div className="center">
                        <figure className="note">"Hesap Oluştur" butonuna tıklayarak <Link to="terms-conditions.html">Kullanıcı Sözleşmesi</Link>ni kabul etmiş olursunuz.</figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
