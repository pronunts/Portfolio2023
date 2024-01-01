import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
    { duration: '20s', target: 150 }, // below normal load
    { duration: '30s', target: 300 }, // around the breaking point
    { duration: '10s', target: 0 }, // scale down. Recovery stage.
    ],
};

const BASE_URL = 'http://localhost:4173';

export default function () {
    const res = http.get(`${BASE_URL}`);
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}
