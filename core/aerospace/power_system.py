import numpy as np

class PowerSystem:
    def __init__(self, power_source, power_storage):
        self.power_source = power_source
        self.power_storage = power_storage

    def generate_power(self):
        # Simulate the generation of power
        return self.power_source

    def store_power(self, power):
        # Simulate the storage of power
        self.power_storage += power
        return self.power_storage

    def provide_power(self, load):
        # Simulate the provision of power to a load
        if self.power_storage >= load:
            self.power_storage -= load
            return load
        else:
            return 0

# Example usage:
power_system = PowerSystem(power_source=100, power_storage=500)
power_generated = power_system.generate_power()
power_stored = power_system.store_power(power_generated)
power_provided = power_system.provide_power(200)
