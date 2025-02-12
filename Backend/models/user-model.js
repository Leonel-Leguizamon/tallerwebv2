import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema({
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;