#include <iostream>
#include <cmath>

class PropulsionSystem {
public:
    PropulsionSystem(double thrust, double specific_impulse) {
        this->thrust = thrust;
        this->specific_impulse = specific_impulse;
    }

    double calculate_acceleration(double mass) {
        return this->thrust / mass;
    }

    double calculate_delta_v(double mass, double time) {
        return this->thrust / mass * time;
    }

private:
    double thrust;
    double specific_impulse;
};

int main() {
    PropulsionSystem propulsion_system(100, 300);
    double mass = 1000;
    double time = 10;
    double acceleration = propulsion_system.calculate_acceleration(mass);
    double delta_v = propulsion_system.calculate_delta_v(mass, time);
    std::cout << "Acceleration: " << acceleration << " m/s^2" << std::endl;
    std::cout << "Delta-v: " << delta_v << " m/s" << std::endl;
    return 0;
}
