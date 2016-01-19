import render from 'fody';

export default function aukReact(Html) {
    return (app) => {
        app.context.render = function (View, data) {
            this.body = render({
                context: this,
                View,
                data,
                Html,
            });
        };
    };
}
