import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const mutation = useMutation({ mutationFn: login });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ id, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="User ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>

            {mutation.isPending && <p>Logging in...</p>}
            {mutation.isError && <p style={{ color: 'red' }}>{mutation.error.message}</p>}
            {mutation.isSuccess && <p style={{ color: 'green' }}>Welcome {mutation.data.user.name}!</p>}
        </div>
    );
}

export default Login;
