// Store DOM reference for reuse - prevents repeated querySelector calls
const refs = {
    loginForm : document.querySelector('.login-form'),
}

function handleSubmit(e) {
    // Prevents default form submission (page reload)
    e.preventDefault()

    // e.currentTarget = the form element (reliable, always the element with the listener)
    // .elements gives access to all form inputs by their 'name' attribute
    // .value gets the input's current value
    // .trim() removes leading/trailing whitespace (prevents "   " from passing validation)
    const email = e.currentTarget.elements.email.value.trim()
    const password = e.currentTarget.elements.password.value.trim()

    // Validates both fields are filled
    // Early return pattern - exits function if validation fails
    if(!email || !password) {
        alert('Please fill all required fields')
        return // Stops execution here, doesn't reset form (preserves user input)
    }

    // FormData automatically collects all form inputs into key-value pairs
    // More scalable than manually building an object (works with any number of fields)
    const formData = new FormData(e.currentTarget)

    // Clears all form inputs after successful validation
    e.currentTarget.reset()

    // Converts FormData to a plain JavaScript object for easier use
    // Returns the data (though nothing currently captures this value)
    return Object.fromEntries(formData)
}


refs.loginForm.addEventListener('submit', handleSubmit)