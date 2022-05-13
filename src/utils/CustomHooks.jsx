import { useEffect } from 'react';

/**
 *
 * @param {*} ref Reference of an element given by the useRef hook.
 * @param {*} handleClickOutside Function to run when a click is detected outside of the passed component in ref
 */
const useOutsideAlerter = (ref, handleClickOutside) => {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClickOutside(event);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClick);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref]);
};

export default useOutsideAlerter;
