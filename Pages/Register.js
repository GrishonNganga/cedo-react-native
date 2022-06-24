import { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { Input, Button, ButtonLoader } from '../Components/Ui'
import tw from 'tailwind-react-native-classnames';

export const Register = () => {

    const initialDetails = {
        names: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    }

    const [formDetails, setFormDetails] = useState(initialDetails)
    const [fieldsFilled, setFieldsFilled] = useState(false)

    useEffect(() => {
        checkFields()
    }, [formDetails])

    const handleChange = (e, value) => {
        setFormDetails(prevState => ({ ...prevState, [e]: value }))
    }

    const checkFields = () => {
        if (formDetails.names !== "" && formDetails.phone !== "" && formDetails.email !== "" && formDetails.password.length > 6 && formDetails.password === formDetails.confirmPassword) {
            setFieldsFilled(true)
        } else {
            setFieldsFilled(false)
        }
    }
    const handleSubmit = () => {
        console.log("submitted")
    }

    return (
        <View style={[tw`w-full h-full flex justify-center items-center p-8`]}>
            <Image
                style={[tw`w-16 h-16`]}
                resizeMode={"contain"}
                source={require('../assets/coin.png')}
            />
            <Text style={[tw`text-3xl font-extrabold tracking-wider mt-4`]}>Create account</Text>
            <Input
                name={"names"}
                onChange={(e) => { handleChange("names", e) }}
                className="mt-4"
                placeholder="Full names"
            />
            <Input
                name={"phone"}
                type={"numeric"}
                onChange={(e) => { handleChange("phone", e) }}
                className="mt-4"
                placeholder="Phone number"
            />
            <Input
                name={"email"}
                type={"email-address"}
                onChange={(e) => { handleChange("email", e) }}
                className="mt-4"
                placeholder="Email Address"
            />
            <Input
                name={"password"}
                onChange={(e) => { handleChange("password", e) }}
                secureTextEntry={true}
                className={"mt-4"}
                placeholder={"Strong password"}
            />
            <Input
                name={"confirmPassword"}
                onChange={(e) => { handleChange("confirmPassword", e) }}
                secureTextEntry={true}
                className={"mt-4 mb-8"}
                placeholder={"Confirm password"}
            />
            {
                fieldsFilled &&
                <Button
                    text={"Create account"}
                    onClick={handleSubmit}
                />
                ||
                <Button
                    text={"Create account"}
                    onClick={handleSubmit}
                    disabled={true}
                />
            }
            {/* <ButtonLoader /> */}
        </View>
    );
}