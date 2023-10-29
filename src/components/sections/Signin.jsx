import React from "react";

function Signin() {
  return (
    <main>
      
        <div class="container">

            <div class="row flex-lg-row align-items-top g-5 py-5">
                <div class="col-lg-6">
                    <h2 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Для оформления подписки 
                        на тариф, необходимо авторизоваться.</h2>
                        <img src="./img/Characters.png" alt="pic" />
                  </div>




              <div class="col-6 col-sm-6 col-lg-6 account-box">


<div class="hero-form-box">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Войти</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Зарегистрироваться</button>
  </li>
  
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    
    <form>
       
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">Логин или номер телефона:</label>
          <input type="email" id="form2Example1" class="form-control" />
         
        </div>
      
     
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">Пароль:</label>
          <input type="password" id="form2Example2" class="form-control" />
         
        </div>
      
      
    
      
       
        <button type="button" class="btn btn-primary btn-block mb-4">Войти</button>
      
        
        <div class="text-left">
          <p class="text-center"> <a href="#!">Восстановить пароль</a></p>
          <p>Войти через:</p>
          <a href="#"><img class="img-icons" src="./img/google.png" alt="google" /></a>
          <a href="#"><img class="img-icons" src="./img/facebook.png" alt="facebook" /></a>
          <a href="#"><img class="img-icons" src="./img/yandex.png" alt="yandex" /></a>
        </div>
      </form>

  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">


    <form>
      
    
          <div class="form-outline mb-4">
            <label class="form-label" for="registerUsername">Имя пользователя</label>
            <input type="text" id="registerUsername" class="form-control" />
            
          </div>
    
        
          <div class="form-outline mb-4">
            <label class="form-label" for="registerEmail">Email</label>
            <input type="email" id="registerEmail" class="form-control" />
          
          </div>
    
   
          <div class="form-outline mb-4">
            <label class="form-label" for="registerPassword">Пароль</label>
            <input type="password" id="registerPassword" class="form-control" />
           
          </div>
    
         
          <div class="form-outline mb-4">
            <input type="password" id="registerRepeatPassword" class="form-control" />
            <label class="form-label" for="registerRepeatPassword">Повторите пароль</label>
          </div>
    
      
          <div class="form-check d-flex justify-content-center mb-4">
            <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
              aria-describedby="registerCheckHelpText" />
            <label class="form-check-label" for="registerCheck">
              Принимаю условия и политику конфиденциальности
            </label>
          </div>
    
         
          <button type="submit" class="btn btn-primary btn-block mb-3">Зарегистрироваться</button>

      
      </form>
  </div>
</div>

              </div>
            </div>


             
            </div>
        </div>
    
    </main>

  );
}

export default Signin;
