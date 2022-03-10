import { ERole } from '@src/types/enum';
import { authAction, IAuthState } from '@stores/authSlice';
import { IRootState, store } from '@stores/store';
import { dequal } from 'dequal';
import React, { FC } from 'react';
import { connect } from 'react-redux';
type AuthOptions = {
    auth?: boolean;
    roleAcccpet?: ERole[];
    roleReject?: ERole[];
    loadingInAuthorize?: boolean;
};

const authHOC = (options?: AuthOptions) => {
    const authState = store.getState().auth;
    console.log('authState', authState);

    return <TProps extends unknown>(Component: FC<TProps>) => {
        return class AuthClass extends React.Component<TProps & IAuthState, any> {
            constructor(props: TProps & IAuthState) {
                super(props);
                this.state = {
                    loading: options?.auth ?? options?.loadingInAuthorize ?? false,
                };
            }
            checkRole = () => {
                return '';
            };
            shouldComponentUpdate(nextProps: TProps & IAuthState, nextState: any) {
                return dequal(this.props, nextProps) || dequal(this.state, nextState);
            }

            render() {
                const { loading } = this.state;
                if (options?.loadingInAuthorize && loading) {
                    return <div>Loading...</div>;
                }
                return <Component {...this.props} />;
            }
        };
    };
};

export default authHOC;
