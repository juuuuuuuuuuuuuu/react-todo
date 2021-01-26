import React from 'react';

function Layout({ children, title }) {
  return (
    <div className="col-lg-12 m-t-20" data-container="incompleted">
    <div className="card" style={{ width: '100%' }}>
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        {children}
      </div>
    </div>
  </div>
  )
}
export default Layout;