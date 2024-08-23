<template>
  <div class="section">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <h1 class="display-1">Reach Me</h1>
          <div class="section pb-5 pt-5 pt-sm-2 text-center">
            <input
              class="checkbox"
              type="checkbox"
              id="reg-log"
              name="reg-log"
            />
            <label for="reg-log"></label>
            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">
                <div class="card-back">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h4 class="mb-4 pb-3">Contact Info</h4>
                      <div class="contact-info">
                        <p>
                          <i class="bi bi-telephone"></i> Phone: +27 69 587 2540
                        </p>
                        <p>
                          <i class="bi bi-envelope-at"></i>Email:<a
                            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTgtzpBJrtbstKWFKtVJDPfWNZrBHctjpwZnvcwDVZMqSdFGhTMNVsxRtxLZJjrFzrjNWM"
                            target="_blank"
                          >
                            JMClimbing@gmail.com
                          </a>
                        </p>
                        <p>
                          <i class="bi bi-geo-alt"></i> Address:
                          <a
                            href="https://maps.app.goo.gl/cighvJoNnPx5ZBQ48"
                            target="_blank"
                          >
                            Parow, Cape Town 7500</a
                          >
                        </p>
                      </div>
                      <div class="social-media">
                        <a
                          class="icon"
                          href="https://www.linkedin.com/in/mardoqu%C3%A9iro-dimbu-55b142283/"
                          target="_blank"
                          ><i class="bi bi-linkedin"></i
                        ></a>
                        <a
                          class="icon"
                          href="https://github.com/Mardoqueiro"
                          target="_blank"
                          ><i class="bi bi-github"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-front">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h4 class="mb-4 pb-3">Reach Me</h4>
                      <form
                        action="https://www.formbackend.com/f/8ef8442d15f3fa15"
                        method="POST"
                      >
                        <div class="form-group">
                          <label for="name"></label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-style"
                            placeholder="Full Name"
                            required
                          />
                          <i class="input-icon uil uil-user"></i>
                        </div>
                        <div class="form-group mt-2">
                          <label for="email"></label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-style"
                            placeholder="Email Address"
                            required
                          />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <label for="message"></label>
                          <textarea
                            id="message"
                            name="message"
                            class="form-style"
                            placeholder="Enter Message"
                            required
                          ></textarea>
                          <i class="input-icon uil uil-comment"></i>
                        </div>
                        <button type="submit" class="btn mt-4">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  color: antiquewhite;
  font-weight: normal;
}

h4 {
  color: #fff;
}

@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container,
  .form-horizontal {
    margin: 0 auto;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {
  .direct-contact-container,
  .form-wrapper {
    float: none;
    margin: 0 auto;
  }
  .form-control,
  textarea {
    margin: 0 auto;
  }

  .name,
  .email,
  textarea {
    width: 280px;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>