import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (07)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Course 1 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/unit11.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1111 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer Unit 1
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 2 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/unit22.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2222 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer Unit 2
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 3 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/unit33.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3333 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer Unit 3
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/unit44.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4444 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer Unit 4
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/React.png" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5555 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer Unit 5
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 6 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/unit11.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6666 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer Unit 6
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 7 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/unit11.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7777 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer Unit 7
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 8 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/unit11.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS8888 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer Unit 8
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
