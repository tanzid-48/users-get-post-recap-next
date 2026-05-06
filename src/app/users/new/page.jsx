"use client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,

  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const NewUserPage = () => {
  const onSubmit = async(e) => {
    e.preventDefault();


    const formData = new FormData(e.target);
    const newUsers = Object.fromEntries(formData.entries());
    console.log("form",newUsers); 

    const req = await fetch('https://user-express-server-1.onrender.com/users',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newUsers)

    });
    const res = await req.json();
   if(res.success){
    alert("User added successfully!");
    redirect('/users');
   }else{
    alert("Something went wrong!");
   }   

  };
  return (
    <div>
      <Form className="w-full max-w-96" onSubmit={onSubmit}>
        <Fieldset>
          <Fieldset.Legend>Profile Settings</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">Add new Users </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default NewUserPage;
