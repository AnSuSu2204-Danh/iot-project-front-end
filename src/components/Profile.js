import React from 'react';

function Profile() {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card card-profile">
            <img src="./assets/img/bg-profile.jpg" alt="Image placeholder" className="card-img-top" />
            <div className="row justify-content-center">
              <div className="col-4 col-lg-4 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="./assets/img/team-4.jpg" className="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body mt-4 pt-0">
              <div className="text-center">
                <h5 className="h3">
                  Jessica Jones<span className="font-weight-light">, 27</span>
                </h5>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Bucharest, Romania
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                </div>
                <div>
                  <i className="ni education_hat mr-2"></i>University of Computer Science
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
