import Users from "../models/users.js"
import bcrypt from "bcrypt"

export const login = async (req, res) =>  { 

   const {email, password} = req.body
   console.log(req.body)

   try {
      let userExist = await Users.findOne({email: email})
      if(!userExist) { 
        res.json({message: "The email is not registered"})
      } else { 
        bcrypt.compare(password, userExist.password)
            .then((correct) => { 
                if(correct) { 
                    const {id, name, email, password} = userExist;
                    res.json({
                         id: id,
                         name: name,
                         email: email,
                         password: password
                        })
                    }else { 
                        res.json({message: "Password is Incorrect"})
                    }
            })
      }
   } catch (error) {
    res.send("I cant Find an user with that data! 👎")
    console.log(error)
   }
}


export const register = async (req, res) => { 
    
    const {name, password, email} = req.body
    console.log(req.body)

    await Users.findOne({email})
              .then((user) => { 
                if(user) { 
                    res.json({message: "The email exist in our DataBase. Please, select other"})
                } else if (!name || !email || !password) { 
                    res.json({message: "Data is missing to be able to register. Please complete all fields"})
                } else { 
                    console.log(req.body)
                    bcrypt.hash(password, 10, (err, passwordHash) => { 
                        if(err) res.json({err})
                        else { 
                            const newUser = new Users ( { 
                                name: name,
                                password: passwordHash,
                                email: email
                            })
                             newUser.save()
                                    .then((user) => { 
                                        res.json({message: "Usuario creado correctamente", user})     
                                    })
                                    .catch((err) => console.log(err))               
                        }
                    })
                }
              })
}



export const getUserById = async (req, res) => { 
    const {userId} = req.params
    console.log(userId)

    Users.find({_id: userId})
    .then((exist) => { 
      res.json(exist)
    })
    .catch((err) => { 
      console.log(err)
    })
}

/*
export const editUserData = async (req, res) => { 
     const {id} = req.params
     const {name, email, lastPassword, newPassword, newImage} = req.body
     try {
        const userInformation = await User.findOne({_id: id})
        if(userInformation) { 
           bcrypt.compare(lastPassword, userInformation.password)
                 .then( async (correct) => { 
                    if(correct) { 
                        const hashedNewPassword = await bcrypt.hash(newPassword, 10)
                        await User.findOneAndUpdate({ _id: id }, { password: hashedNewPassword });
                        await User.findOneAndUpdate({_id: id}, {name: name})
                        await User.findOneAndUpdate({_id: id}, {profileImage: newImage})
                        res.json({message: "Your data was changed correctly. Please log in again with the new data."})
                    } else { 
                        res.json({message: "The password you entered is not your current password. Please re-enter it to verify your identity."})
                    }
                 })
                 .catch((err) => { 
                    res.json({message: "The password you entered is not your current password. Please re-enter it to verify your identity."})
                 }) 
        } else { 
            res.json({message: "The email entered is not registered. Please re-enter it correctly in order to make the changes."})
        }
     } catch (error) {
        console.log(error)
        res.json({message: "Erros Detected"})

     }
}*/