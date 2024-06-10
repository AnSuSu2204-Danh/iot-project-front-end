// src/components/Table.js
import React from 'react';

const Table = () => {
  return (
    <div className="main-content">
      <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Pages</a></li>
              <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Tables</li>
            </ol>
            <h6 className="font-weight-bolder mb-0">Tables</h6>
          </nav>
        </div>
      </nav>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-12 position-relative z-index-2">
            <div className="card card-plain mb-4">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table align-items-center">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Column1</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Column2</th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Column3</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Data1</td>
                            <td>Data2</td>
                            <td>Data3</td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add your additional components here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
