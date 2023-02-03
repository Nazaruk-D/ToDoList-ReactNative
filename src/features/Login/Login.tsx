// import React from 'react'
// import {
//     Button,
//     Checkbox,
//     FormControl,
//     FormControlLabel,
//     FormGroup,
//     FormLabel,
//     Grid,
//     TextField
// } from "@material-ui/core";
// import {useFormik} from "formik";
// import {loginTC} from "./auth-reducer";
// import {useAppDispatch, useAppSelector} from "../../reducers/store";
// import {Navigate} from "react-router-dom";
//
// type FormikErrorType = {
//     email?: string
//     password?: string
//     rememberMe?: boolean
// }
//
//
// export const Login = () => {
//     const dispatch = useAppDispatch()
//     const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//             rememberMe: false
//         },
//         validate: (values) => {
//             const errors: FormikErrorType = {}
//             if (!values.email) {
//                 errors.email = 'Required'
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                 errors.email = 'Invalid email address'
//             }
//
//             if (!values.password) {
//                 errors.password = 'Invalid password'
//             } else if (values.password.length < 4) {
//                 errors.password = "Password must be 8 characters long.";
//             }
//             return errors
//         },
//         onSubmit: values => {
//             dispatch(loginTC(values))
//             formik.resetForm()
//         },
//     })
//
//     if (isLoggedIn) {
//         return <Navigate to={"/"}/>
//     }
//
//     return <Grid container justifyContent={'center'} style={{marginTop: "150px"}}>
//             <form onSubmit={formik.handleSubmit}>
//                 <FormControl>
//                     <FormLabel>
//                         <p>To log in get registered
//                             <a href={'https://social-network.samuraijs.com/'}
//                                target={'_blank'}> here
//                             </a>
//                         </p>
//                         <p>or use common test account credentials:</p>
//                         <p>Email: free@samuraijs.com</p>
//                         <p>Password: free</p>
//                     </FormLabel>
//                     <FormGroup>
//                         <TextField
//                             label="Email"
//                             margin="normal"
//                             {...formik.getFieldProps('email')}
//                         />
//                         { formik.touched.email && formik.errors.email && <div style={{color:"red"}}>{formik.errors.email}</div>}
//                         <TextField
//                             type="password"
//                             label="Password"
//                             margin="normal"
//                             autoComplete={"on"}
//                             {...formik.getFieldProps('password')}
//                         />
//                         { formik.touched.password && formik.errors.password && <div style={{color:"red"}}>{formik.errors.password}</div>}
//                         <FormControlLabel label={'Remember me'} control={<Checkbox
//                             {...formik.getFieldProps('rememberMe')}
//                             checked={formik.values.rememberMe}
//                         />}/>
//                         <Button type={'submit'} variant={'contained'} color={'primary'}>
//                             Login
//                         </Button>
//                     </FormGroup>
//                 </FormControl>
//             </form>
//     </Grid>
// }


import {useAppDispatch, useAppSelector} from "../../reducers/store";
import {loginTC} from "./auth-reducer";
import {Navigate} from "react-router-dom";
import React from "react";
import {Button, TextInput, View} from "react-native";

export const Login = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const onSubmit = () => {
        const values = {
            email: 'nazaruk-dima@mail.ru',
            password: 'power3562308',
            rememberMe: true
        }
            dispatch(loginTC(values))
        }

    return <View>
            <Button onPress={onSubmit} title={'add'}></Button>
        </View>
}