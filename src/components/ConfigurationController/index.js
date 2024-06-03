// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onClickContent = () => {
        onToggleShowContent()
      }
      const onClickLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onClickRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="upper-container">
          <h1>Layout</h1>
          <div>
            <input
              checked={showContent}
              type="checkbox"
              id="checkbox"
              onClick={onClickContent}
            />
            <label htmlFor="checkbox">Content</label>
          </div>
          <div>
            <input
              checked={showLeftNavbar}
              type="checkbox"
              id="leftNavbar"
              onClick={onClickLeftNavbar}
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
          </div>
          <div>
            <input
              checked={showRightNavbar}
              type="checkbox"
              id="rightNavbar"
              onClick={onClickRightNavbar}
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
