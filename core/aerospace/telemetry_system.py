import numpy as np
from scipy.signal import butter, lfilter

class TelemetrySystem:
    def __init__(self, sampling_rate, bandwidth):
        self.sampling_rate = sampling_rate
        self.bandwidth = bandwidth

    def filter_signal(self, signal):
        nyq = 0.5 * self.sampling_rate
        normal_cutoff = self.bandwidth / nyq
        b, a = butter(5, normal_cutoff, btype='low')
        filtered_signal = lfilter(b, a, signal)
        return filtered_signal

    def transmit_signal(self, signal):
        # Simulate the transmission of the signal
        return signal

# Example usage:
telemetry_system = TelemetrySystem(sampling_rate=1000, bandwidth=100)
signal = np.random.rand(1000)
filtered_signal = telemetry_system.filter_signal(signal)
transmitted_signal = telemetry_system.transmit_signal(filtered_signal)
