import React, { FC } from 'react';

type AuthOptions = {
    auth?: boolean;
    roleAcccpet?: string[];
    roleReject?: string[];
    loadingInAuthorize?: boolean;
};

const authHOC = (options?: AuthOptions) => {
    return <TProps extends unknown>(Component: FC<TProps>) => {
        return class AuthClass extends React.Component<TProps, any> {
            constructor(props: TProps) {
                super(props);
                this.state = {
                    loading: options?.auth ?? options?.loadingInAuthorize ?? false,
                };
            }

            componentDidMount() {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 3000);
            }

            render() {
                const { loading } = this.state;
                if (options?.loadingInAuthorize && loading) {
                    return <div>Loading...</div>;
                }
                return <Component {...this.props} />;
            }
        } as any as FC<TProps>;
    };
};

export default authHOC;
