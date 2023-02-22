import Form from './Form';
import MobileForm from './MobileForm';
import Login from './Login';
import MobileLogin from './MobileLogin';
import NavLinks from './NavLinks';
import NavTitle from './NavTitle';
import SetDefaultLocation from './SetDefaultLocation';

export default function Sidebar(props) {
  return (
    <>
      {/* Mobile Menu Bar */}
      <div className='flex items-center justify-between pl-3 text-gray-100 bg-black w-fit sm:w-screen md:hidden'>
        <MobileForm
          handleLocationInput={props.handleLocationInput}
          handleSubmit={props.handleSubmit}
        />
        <NavLinks />
        <MobileLogin />
      </div>

      {/* Sidebar */}
      <div className='sidebar w-64 px-2 space-y-2.5 text-white bg-black absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
        <NavTitle />
        <nav className='space-y-2'>
          <Form
            loading={props.loading}
            handleLocationInput={props.handleLocationInput}
            handleSubmit={props.handleSubmit}
          />
          <NavLinks />
        </nav>
        <Login />
      </div>
    </>
  );
}
